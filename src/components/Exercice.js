const Exercice = ()=>{
const login= true


return(
<div>

    <p> exrcice</p>

   <b>{login ? "est connecter" : "n'est pas connecter"}</b> <br/>

   <b>{login && "Bienvenue sur notre site"}</b>
</div>
);
}
export default Exercice