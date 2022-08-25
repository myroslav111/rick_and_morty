import Select from 'components/Select';
import SearchInput from 'components/SearchInput';
import './Navigation.css';

export default function SearchAppBar() {
  return (
    <div className="app-bar">
      <SearchInput />
      <Select />
    </div>
  );
}
