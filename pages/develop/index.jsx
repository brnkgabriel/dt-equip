import Header from '../../comps/Header';

const Develop = () => {
  const description = "Migrate from concept to product through the develop step. On this page you will learn the principles of software design from basics of computer science to data structures and algorithms to app creation to game applications."
  const name = "Develop | DT-EQUIP"
  const url = "develop"
  return (
    <div>
      <Header name={name} description={description} url={url} />
      Develop
    </div>
  );
}
 
export default Develop;