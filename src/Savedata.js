import React, { useState } from 'react';
import * as fileSaver from 'file-saver';
import  XLSX from 'sheetjs-style';
import Readfile from './Readfile';
function Savedata({num,num2}) {
    const[visible,setVisible]=useState(false);
    let data=[];
    let sum=Number(num)+Number(num2);
    let arr={num,num2,sum};
    data.push(arr);
    console.log("Data:",data);
    console.log("type of data",typeof(data));
    
    let filetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,charset=UTF-8';
    let fileextension='.xlsx';
    const downloadFile=async()=>{
        const ws=XLSX.utils.json_to_sheet(data);
        const wb={Sheets:{'data':ws},SheetNames:['data']};
        const excelbuffer=XLSX.write(wb,{bookType:'xlsx',type:'array'});
        const savedata=new Blob([excelbuffer],{type:filetype});
        fileSaver.saveAs(savedata,"data1"+fileextension)
          setVisible(!visible);
    }
    return (
        <div>
            <button onClick={downloadFile}>Create Excel</button>
         {
            visible? <Readfile/>:null
         }  
  
        </div>
    );
}

export default Savedata;