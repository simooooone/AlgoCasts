// Function for building the cell for rows separator
function separator_cell(len, sep_cell) {
  let ret = "";
  ret = sep_cell + "";
  for (let i = 0; i < len; i++) {
    ret += "-";
  }
  return ret;
}

function solution(A, K) {
  console.log("Parameters are: A:", A, " K:", K);

  // check max integer in A
  let max_num = Math.max(...A);
  let rows = Math.floor(A.length / K);
  let len_max_num = max_num.toString().length;
  let sep_cell = "+";
  let ret_sep_row = "";
  let sep_row = separator_cell(len_max_num, sep_cell);
  let last_sep = "";

  // Building the complete row separator for all but last rows
  for (let j = 0; j < K; j++) {
    if (j === A.length) break;
    ret_sep_row += sep_row;
  }
  // adding le closure
  ret_sep_row += sep_cell;

  // setting variables
  let sep_col = "|";
  const ret_cell = new Array();
  let last_row = sep_cell + "";
  let ret_row = "";

  // BEGIN building the table
  for (let h = 0; h < A.length; h++) {
    if (h === 0) console.log(ret_sep_row);
    // reversing array to cycle in reverse order to add spaces back to the number
    // and converting the number in an array of values
    let rev_num = A[h].toString().split("").reverse();

    // initializing the cell value and check it does not contain undefined
    ret_cell[h] = "";
    // generating the cells with data
    for (let i = 0; i < len_max_num; i++) {
      rev_num[i] ? (ret_cell[h] += rev_num[i]) : (ret_cell[h] += " ");
    }
    // finalizing the cell with closure |
    ret_cell[h] += sep_col;

    // reversing the cell value in the right reading flow
    ret_cell[h] = ret_cell[h].toString().split("").reverse().join("");

    ret_row += ret_cell[h];

    // generating the row
    if ((h + 1) % K === 0) {
      ret_row += sep_col;
      // outputting row of data
      console.log(ret_row);
      // outputting separator row
      console.log(ret_sep_row);
      ret_row = "";
    }
    // Generating last row of cells
    if (h === A.length - 1 && K != 1) {
      // counting the remaining cells in the array
      const remaining_cells = A.length % K;
      // building last separator row
      for (let j = 0; j < remaining_cells; j++) {
        last_sep += sep_row;
      }

      ret_row += sep_col;
      last_sep += sep_cell;
      // outputting last row of data
      console.log(ret_row);
      // outputting last separator row
      console.log(last_sep);
    }
  }
}

for (let i = 1; i < 14; i++) {
  solution([25, 1, 2, 300, 4000, 5000, 60000, 70000, 80000, 900, 11], i);
}
