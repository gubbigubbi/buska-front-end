import AutoComplete from 'antd/lib/auto-complete';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import { debounce } from 'throttle-debounce';

import Link from 'next/link';

const Option = AutoComplete.Option;

function onSelect(value) {
  console.log('onSelect', value);
}

class SearchForm extends React.Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    console.log(value);

    const _ENPOINT = `http://buska.com.au/wp-json/wp/v2/posts?s=${value}`;

    fetch(_ENPOINT) // Call the fetch function passing the url of the API as a parameter
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);

        const results = data.map(result => ({
          title: result.title.rendered,
          id: result.id,
        }));

        this.setState({
          dataSource: !results ? [] : results,
        });
      })
      .catch(function() {
        // This is where you run code if the server returns any errors
      })
      .finally(() => console.log('finally'));
  };

  render() {
    const { dataSource } = this.state;

    const options = dataSource.map(option => (
      <Option key={option.id} className="show-all">
        <Link href={`/answer?id=${option.id}`}>{option.title}</Link>
      </Option>
    ));

    return (
      <AutoComplete
        dataSource={options}
        style={{ width: '100%' }}
        onSelect={onSelect}
        onSearch={debounce(300, this.handleSearch)}
        placeholder="Enter some keywords i.e. Google drive share folder"
        size="large"
      >
        <Input
          suffix={<Icon type="search" className="certain-category-icon" />}
        />
      </AutoComplete>
    );
  }
}

export default SearchForm;
