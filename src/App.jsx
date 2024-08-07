import reactLogo from './assets/react.svg';
import './App.css';
import FileUploader from './components/FileUploader';
import CompareResult from './components/CompareResult';
import { useState } from 'react';


function App() {

  const [compareResult, setCompareResult] = useState('');

  const compareFiles = (baseContent, newContent) => {
    const baseLines = new Set(baseContent.split('\n').map(line => line.trim()));
    const newLines = newContent.split('\n').map(line => line.trim());

    const missingLines = newLines.filter(line => !baseLines.has(line));

    const result = missingLines.join('\n');
    setCompareResult(result);

  };

  return (
    <>
      <div className='containerall'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Subir Archivo</h1>
        <div className='content_card'>
          <FileUploader onFilesUploaded={compareFiles} />
          {compareResult && <CompareResult result={compareResult} />}
        </div>
      </div>
    </>
  )
}

export default App;
