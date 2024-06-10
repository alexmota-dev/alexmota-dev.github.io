import { User } from "../api/types/User";
import { UserLogin } from "../api/types/UserLogin";

interface Response {
  data?: {
    user: {
      name: string;
      email: string;
    };
    token: string;
  };
  status?: number;
}

export function post(text: string, user: UserLogin): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if(user.email === 'alexmota.work@gmail.com') {
        resolve({
          data: {
            token:
              '91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f',
            user: {
              name: 'Alex Mota',
              email: 'alexmota.work@gmail.com',
            },
          },
          status: 200,
        });
      }
      else{
        resolve({
          status: 403,
        });
      }
    }, 2000);
  });
}

export const defaults = {
  headers: {
    Authorization: '',
  },
};