import Header from '../../comps/Header';

const Animate = () => {
  const description = "Migrate from concept to product through the animate step. On this page you will learn the principles of 2D & 3D animation."
  const name = "Animate"
  const url = "animate"
  return (
    <div>
      <Header name={name} description={description} url={url} />
      Animate
    </div>
  );
}
 
export default Animate;