const { describe, it, expect, beforeEach } = require('@jest/globals');
const { JSDOM } = require('jsdom');

describe('Footer Year Script', () => {
  let dom;
  let yearSpan;

  beforeEach(() => {
    dom = new JSDOM(`
      <!doctype html>
      <footer><span id="year"></span></footer>
    `);
    global.document = dom.window.document;
    global.window = dom.window;
    yearSpan = document.getElementById('year');
  });

  it('sets current year in footer span', () => {
    const script = document.createElement('script');
    script.textContent = `
      document.getElementById("year").textContent = new Date().getFullYear();
    `;
    document.body.appendChild(script);
    script.remove();

    expect(yearSpan.textContent).toBe('2026');
  });
});
