import React, {useState} from "react";

const Auth = () => {
    const[formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        isLogin: true
    });

    const handleChange = (e) => {
        const { name , value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here would be where you'd send data to the server for login or registration
        setFormData({ username: '', password: '', email: '' });
      };

      const toggleForm = () => {
        setFormData(prevState => ({
          ...prevState,
          isLogin: !prevState.isLogin,
          email: ''
        }));
      };

    return (
        <div className="auth-container">
            <h2>{formData.isLogin ? 'LOGIN' : 'REGISTER'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange} 
                        required
                    />
                </div>
                {!formData.isLogin && (
                    <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} 
                        required
                    />
                </div>
                )}
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <button type="submit">{formData.isLogin ? 'Login' : 'Register'}</button>
            </form>
            <p onClick={toggleForm}>
                {formData.isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </p>
        </div>
    );
};

export default Auth;