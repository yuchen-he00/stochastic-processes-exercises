window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    macros: {
      '*': ['{\\mathbf{#1}}', 1],
      '+': ['{\\mathcal{#1}}', 1],
      '-': ['{\\mathrm{#1}}', 1],
      bb: ['{\\mathbb{#1}}', 1],
      '`': ['{\\mathtt{#1}}', 1],
      '@': ['{\\mathscr{#1}}', 1],
      '!': ['{\\mathsf{#1}}', 1],

      Erdos: '\\text{Erdős}',
      Renyi: '\\text{R\u00e9nyi}',
      Laszlo: '\\text{L\u00e1szl\u00f3}',
      Lovasz: '\\text{Lov\u00e1sz}',
      Godel: '\\text{G\u00f6del}',
      Ito: '\\text{It\u00f4}',
      Poincare: '\\text{Poincar\u00e9}',
      Levy: '\\text{L\u00e9vy}',

      '1': ['\\bb 1\\left[#1\\right]', 1],
      I: 'i\\mkern1mu',
      set: ['\\left\\{#1\\right\\}', 1],
      tuple: ['\\left(#1\\right)', 1],
      eps: '\\varepsilon',
      inner: ['\\langle #1,#2\\rangle', 2],
      tp: '\\tuple',
      stp: ['\\left[#1\\right]', 1],
      mid: '\\;\\middle\\vert\\;',
      cmid: '\\,:\\,',
      numP: '\\#\\mathbf{P}',
      P: '\\mathbf{P}',
      defeq: ':=',
      d: '\\mathrm{d}',
      dd: '\\mathrm{d}',
      abs: ['\\left|#1\\right|', 1],
      ol: ['\\overline{#1}', 1],
      argmin: '\\mathop{\\arg\\min}',
      argmax: '\\mathop{\\arg\\max}',
      wh: ['\\widehat{#1}', 1],
      wt: ['\\widetilde{#1}', 1],
      mle: '\\preceq',
      mge: '\\succeq',
      emptyset: '\\varnothing',

      Pr: ['\\mathbb{P}_{#1}\\left[#2\\right]', 2, ''],
      E: ['\\mathbf{E}_{#1}\\left[#2\\right]', 2, ''],
      Var: ['\\mathbf{Var}_{#1}\\left[#2\\right]', 2, ''],
      Cov: ['\\mathbf{Cov}_{#1}\\left[#2\\right]', 2, ''],
      Ent: ['\\mathbf{Ent}_{#1}\\left[#2\\right]', 2, ''],

      cadlag: '\\text{càdlàg}',
      cadlad: '\\text{càdlàd}',
      dTV: 'd_{\\mathsf{TV}}',
      Ber: ['\\mathsf{Ber}\\left(#1\\right)', 1]
    }
  }
};

document$.subscribe(() => {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
});