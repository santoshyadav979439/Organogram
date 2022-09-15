import BasicModal from './componnets/molecules/Modal';
import DataGrid from './componnets/organisms/Datagrid';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <h1 className='top-heading'>CET Organogram</h1>
      <DataGrid />
    </div>
  );
}
