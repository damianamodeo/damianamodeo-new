import MyScatterPlot from './ScatterPlot';
import { data } from './data';

export const NivoDemo = () => {
  return (
    <div className={`   `}>
      <MyScatterPlot data={data}></MyScatterPlot>~{' '}
    </div>
  );
};

export default NivoDemo;
