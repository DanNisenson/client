import axios from "axios";

class apiCalls {

  static async getAllHeroes() {
    try {
      const resp: any = await axios.get(process.env.NEXT_PUBLIC_BASE_URL);
      return resp;
    }
    catch (error) {
      console.log(error)
    }
  }

  static async deleteHero(id: string) {
    try {
      const resp: any = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}${id}`);
      return resp;
    }
    catch (error) {
      console.log(error)
    }
  }

}

export default apiCalls;