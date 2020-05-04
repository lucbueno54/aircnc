import React,{useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';
import './styles.css'
import api from '../../services/api'

export default function New({history}){

    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const preview = useMemo(()=>{
        return thumbnail? URL.createObjectURL(thumbnail):null;
    },[thumbnail]);

    async function handleSubmit(event)
    {
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append("company",company);
        data.append("techs",techs);
        data.append("price",price);
        data.append("thumbnail",thumbnail);

       await api.post('/spots',data,{
           headers:{user_id}
       });

       history.push('/dashboard');
    }
    return (
        <form onSubmit= {handleSubmit}>
            <label 
             id='thumbnail' 
             style={{backgroundImage: `url(${preview})`}}
             className={thumbnail ? 'has-thumbnail':''}
             >
                <input type="file" onChange = {event => setThumbnail(event.target.files[0])}/>
                <img src={camera} alt="select img"/>
            </label>

            <label htmlFor="company"> Empresa *</label>
            <input 
             id="company" 
             type="text" 
             placeholder = "Sua empresa incrivel"
             value = {company}
             onChange={event => setCompany(event.target.value)}
             />

            <label htmlFor="techs"> Tecnologoas * <span>(separadas por virgula)</span></label>
            <input 
             id="techs" 
             type="text" 
             placeholder = "Quais Tecnologoas usam?"
             value = {techs}
             onChange={event => setTechs(event.target.value)}
             />

             <label htmlFor="price">VALOR DIÁRIO * <span>(em braco para GRATUITO)</span></label>
             <input 
              id="techs" 
              type="text" 
              placeholder = "Valor cobrado por dia?"
              value = {price}
              onChange={event => setPrice(event.target.value)}
              />

              <button type='submit' className= 'btn'>Cadastrar</button>

        </form>
    )
}