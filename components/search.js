import AutoComplete from 'antd/lib/auto-complete';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Spin from 'antd/lib/spin';
import { debounce } from 'throttle-debounce';

import Link from 'next/link';
//import Router from 'next/router';

const Option = AutoComplete.Option;

class SearchForm extends React.Component {
  state = {
    dataSource: [],
    isLoading: false,
  };

  toggleLoading = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  handleSearch = value => {
    console.log(value);

    this.toggleLoading();
    const _ENPOINT = `https://api.buska.com.au/wp-json/wp/v2/posts?search=${value}`;

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
          isLoading: false,
        });
      })
      .catch(function() {
        // This is where you run code if the server returns any errors
      })
      .finally(() => console.log('finally'));
  };

  // onSelect = value => {
  //   Router.push(`/answer?id=${value}`);
  // };

  render() {
    const { dataSource, isLoading } = this.state;

    const options = dataSource.map(option => (
      <Option key={option.id} value={option.title} className="show-all">
        <Link href={`/answer?id=${option.id}`} as={`/answer/${option.id}`}>
          <a>{option.title}</a>
        </Link>
      </Option>
    ));

    return (
      <Spin tip="reticulating splines..." spinning={isLoading}>
        <AutoComplete
          dataSource={options}
          optionLabelProp="value"
          style={{ width: '100%' }}
          onSearch={debounce(300, this.handleSearch)}
          placeholder="Enter some keywords i.e. Google drive share folder"
          size="large"
        >
          <Input
            suffix={<Icon type="search" className="certain-category-icon" />}
          />
        </AutoComplete>
      </Spin>
    );
  }
}

export default SearchForm;
