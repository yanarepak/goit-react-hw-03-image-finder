import { Hearts } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}> 
      <Hearts
        height="80"
        width="80"
        color="#3c50d0"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass={{justifyContent: 'center'}}
        visible={true}
      />
    </div>
  );
};
