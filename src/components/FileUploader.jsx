import { useState } from "react";
import PropTypes from 'prop-types';

const FileUploader = ({ onFilesUploaded }) => {

  const [baseFile, setBaseFile] = useState(null);
  const [newFile, setNewFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (event.target.name === 'baseFile') {
      setBaseFile(file);
    } else {
      setNewFile(file);
    }
  };

  const handleCompare = () => {
    if (baseFile && newFile) {
      const reader1 = new FileReader();
      const reader2 = new FileReader();

      reader1.onload = () => {
        const baseContent = reader1.result;
        reader2.onload = () => {
          const newContent = reader2.result;
          onFilesUploaded(baseContent, newContent);
          alert('Comparación completada');
        };
        reader2.readAsText(newFile);
      };
      reader1.readAsText(baseFile);
    } else {
      alert('Por favor, sube ambos archivos.');
    }
  };

  return (
    <div>
      <input type="file" name="baseFile" accept=".txt" onChange={handleFileUpload} />
      <input type="file" name="newFile" accept=".txt" onChange={handleFileUpload} />
      <button onClick={handleCompare}>Comparar Archivos</button>
    </div>
  )
}

FileUploader.propTypes = {
  onFilesUploaded: PropTypes.func.isRequired,
};

export default FileUploader;
