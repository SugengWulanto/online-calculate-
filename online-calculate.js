function key(parm) {
    const x = parm.target.value;
    let length = 0,
      symbol = 0,
      number = 0,
      space = 0,
      uc = 0,
      lc = 0;

    for (let i = 0; i < x.length; i++) {
      length = i + 1;
      if (/[^a-zA-Z0-9\-\/]/.test(x[i]) && x[i] != " ") symbol++;
      if (/[0-9]/.test(x[i])) number++;
      if (/[ ]/.test(x[i])) space++;
      if (/[A-Z]/.test(x[i])) uc++;
      if (/[a-z]/.test(x[i])) lc++;
    }

    document.getElementById("length").textContent = length + " Length";
    document.getElementById("symbol").textContent = symbol + " Symbol";
    document.getElementById("number").textContent = number + " Number";
    document.getElementById("space").textContent = space + " Space";
    document.getElementById("up").textContent = uc + " Upper Case";
    document.getElementById("lc").textContent = lc + " Lower Case";
  }