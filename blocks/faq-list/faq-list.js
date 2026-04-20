/*
 * FAQ List Block
 * Expandable FAQ items with animated open/close
 */

function animateAccordion(details, summary) {
  // Skip animation enhancement if Web Animations API is unsupported — native details works
  if (!details.animate) return;

  let animation = null;

  function open() {
    details.style.overflow = 'hidden';
    const startHeight = `${details.offsetHeight}px`;
    details.open = true;
    const endHeight = `${details.offsetHeight}px`;

    if (animation) animation.cancel();
    animation = details.animate(
      { height: [startHeight, endHeight] },
      { duration: 300, easing: 'ease' },
    );
    animation.onfinish = () => {
      details.style.overflow = '';
      animation = null;
    };
  }

  function close() {
    details.style.overflow = 'hidden';
    const startHeight = `${details.offsetHeight}px`;
    const endHeight = `${summary.offsetHeight}px`;

    if (animation) animation.cancel();
    animation = details.animate(
      { height: [startHeight, endHeight] },
      { duration: 300, easing: 'ease' },
    );
    animation.onfinish = () => {
      details.open = false;
      details.style.overflow = '';
      animation = null;
    };
  }

  summary.addEventListener('click', (e) => {
    e.preventDefault();
    if (details.open) close();
    else open();
  });
}

function injectFAQSchema(pairs) {
  if (!pairs.length) return;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export default function decorate(block) {
  const faqPairs = [];

  [...block.children].forEach((row) => {
    // decorate item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.append(...label.childNodes);
    // decorate item body
    const body = row.children[1];
    body.className = 'faq-list-item-body';

    // collect Q&A for structured data
    faqPairs.push({
      question: label.textContent.trim() || summary.textContent.trim(),
      answer: body.textContent.trim(),
    });

    // decorate item
    const details = document.createElement('details');
    details.append(summary, body);
    row.replaceWith(details);

    animateAccordion(details, summary);
  });

  injectFAQSchema(faqPairs);
}
