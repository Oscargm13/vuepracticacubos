import Global from '@/Global';
import axios from 'axios';

class CubosService {

  getCubos() {
    const request = "api/Cubos";
    const url = Global.urlApiCubos + request;
    return axios.get(url)
      .then(response => {
        console.log(response.data);
        return response.data; 
      })
      .catch(error => {
        console.error("Error al obtener los cubos:", error); 
        throw error;
      });
  }
  getMarcas() {
    const request = "api/Cubos/marcas";
    const url = Global.urlApiCubos + request;
    return axios.get(url)
      .then(response => {
        console.log(response.data);
        return response.data; 
      })
      .catch(error => {
        console.error("Error al obtener los cubos:", error); 
        throw error;
      });
  }
  getCubosMarcas(marca) {
    const request = "api/Cubos/cubosmarca" + marca;
    const url = Global.urlApiCubos + request;
    return axios.get(url)
      .then(response => {
        console.log(response.data);
        return response.data; 
      })
      .catch(error => {
        console.error("Error al obtener los cubos:", error); 
        throw error;
      });
  }
}

export default new CubosService();
