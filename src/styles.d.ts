/** Used to type of css modules */ 
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}