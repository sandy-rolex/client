import React, { useEffect } from 'react';
import { message } from 'antd';
import { GetCurrentUser } from '../apicalls/users';
import { useNavigate } from 'react-router-dom';

function ProtectedPage({ children }) {
    const [user, Setuser] = React.useState(null)
    const navigate = useNavigate();
    const validateToken = async () => {
        try {
            const response = await GetCurrentUser()
            if (response.success) {
                Setuser(response.data)
            } else {
                navigate('/login');
                message.error(response.message)
            }
        } catch (error) {
            navigate("/login");
            message.error(error.message)
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            validateToken();
        } else {
            navigate("/login");
        }
    }, []);

    return (
        user &&(
        <div>
            {/*Header */}
            <div className="flex justify-between items-center bg-primary p-5">
            < h1 className="text-2xl text-white cursor-pointer">
              📨 Email Marketing
            </h1>

            <div className="bg-white py-2 px-5 rounded flex gap-1 items-center">
            <i className="ri-shield-user-line"></i>
            <span
             className='underline uppercase'
            >{user.name}</span>
            <i
              className="ri-logout-box-r-line ml-10"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>

            </div>
            </div>

        

           {/*body*/}
        <div className='p-5'>{children}'</div>
        </div>

        )
    );
}
export default ProtectedPage;