import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
const Readfile = () => {
  const [excelData, setExcelData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      readExcel(file);
    }
  };

  const readExcel = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // jsonData now contains the Excel data in array format
      setExcelData(jsonData);
    };

    reader.readAsBinaryString(file);
  };
  const convertToPdf = () => {
    if (excelData) {
      const pdf = new jsPDF();
      pdf.text('Converted PDF from Excel', 10, 10);

      // Assuming excelData is a 2D array
      for (let i = 0; i < excelData.length; i++) {
        for (let j = 0; j < excelData[i].length; j++) {
          pdf.text(excelData[i][j].toString(), 10 + j * 40, 20 + i * 10);
        }
      }

      pdf.save('converted.pdf');
    }
  };

  return (
    <div>
      <input className='upload' type="file" accept=".xlsx" onChange={handleFileUpload} />
      {excelData && (
        <div>
          <h3>Sum:</h3>
         <p>{excelData[1][2]}</p>
         <button onClick={convertToPdf}>Convert to PDF</button>
        </div>
      )}
    </div>
  );
};

export default Readfile;
