export const RenderPosition = {
  BEFORE: `before`,
  AFTER: `after`,
  PREPEND: `prepend`,
  APPEND: `append`
};

export const createElement = (str) => {
  const template = document.createElement(`template`);
  template.innerHTML = str.trim();

  return template.content.firstChild;
};

export const renderElement = (container, element, position) => {
  switch (position) {
    case RenderPosition.APPEND:
      container.append(element);
      break;
    case RenderPosition.PREPEND:
      container.prepend(element);
      break;
    case RenderPosition.BEFORE:
      container.before(element);
      break;
    case RenderPosition.AFTER:
      container.after(element);
      break;
  }
}
