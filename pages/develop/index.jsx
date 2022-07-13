import Header from '../../comps/Header';

const Develop = () => {
  const description = "Migrate from concept to product through the develop step."
  const name = "Develop - DTE"
  const url = "develop"
  return (
    <div>
      <Header name={name} description={description} url={url} />
      Develop
    </div>
  );
}
 
export default Develop;