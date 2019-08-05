import Link from 'next/link';
import Spin from 'antd/lib/spin';

class AnswerCategories extends React.Component {
  state = {
    categories: [],
    isLoading: true,
  };

  componentDidMount() {
    const { categories } = this.props;

    const _ENPOINT = categories
      ? `https://api.buska.com.au/wp-json/wp/v2/categories?include=${categories}&per_page=12`
      : 'https://api.buska.com.au/wp-json/wp/v2/categories?per_page=12&parent=0';

    fetch(_ENPOINT) // Call the fetch function passing the url of the API as a parameter
      .then(resp => resp.json())
      .then(data => {
        const results = data.map(result => ({
          title: result.name,
          id: result.id,
          count: result.count,
          slug: result.slug,
        }));

        this.setState({
          categories: !results ? [] : results,
        });
      })
      .catch(function() {
        // This is where you run code if the server returns any errors
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { categories, isLoading } = this.state;

    const options = categories.map((category, index) => (
      <div key={index}>
        <Link
          href={`/category?id=${category.id}`}
          as={`/category/${category.id}`}
        >
          <button className="button button__primary has-badge">
            {category.title}{' '}
            <span className="badge badge__primary is-at-top">
              {category.count}
            </span>
          </button>
        </Link>
      </div>
    ));

    return (
      <Spin tip="counting chickens 🐣🐥🐔..." spinning={isLoading}>
        <section className="categories-container button-group">
          {options}
        </section>
      </Spin>
    );
  }
}

export default AnswerCategories;
