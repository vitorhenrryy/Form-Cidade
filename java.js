const semestre = document.querySelector("#semestre");
const uf = document.querySelector("#uf");
//        0    1    2    3
let ufs = ["SP", "RJ", "MG", "ES", "SC", "TO", "AM", "BA", "MT"];
ufs.sort();
for (let j = 0; j < ufs.length; j++) {
    uf.innerHTML += `<option>${ufs[j]}</option>`;
}
for (let i = 1; i < 9; i++) {
    semestre.innerHTML += `<option>${i}</option>`;
}