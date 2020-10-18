import React, { useState } from 'react'

/*
  ubah component dibawah sesuai spesifikasi berikut:
  1.  ubah text dengan tulisan berikut
      [GANTI SAYA]
*/

function InputText() {
  /*
    callback dari onChange
    bisa menerima argument event
    argument event adalah sebuah object
    perhatikan bahwa tidak semua event memiliki
    target.value
  */
  const [inputValue, setInputValue] = useState('')

  function handleInputTextChange(e) {
    setInputValue(e.target.value)
  }

  /*
    attribut onChange menerima callback
    handleInputTextChange
  */
  return (
    <div>
      {inputValue}
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputTextChange}
      />
    </div>
  )
}

export default InputText
