import PropTypes from 'prop-types';

const CompareResult = ({result}) => {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([result], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "comparison_result.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <pre>{result} </pre>
      <button onClick={handleDownload}>Descargar Resultado</button>
    </div>
  );
};

CompareResult.propTypes = {
  result: PropTypes.string.isRequired,
};

export default CompareResult;
