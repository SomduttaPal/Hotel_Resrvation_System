import React from 'react';

export class FooterComponent extends React.Component {
    render(){
        return <div>
              <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <p className='text-dark'>&copy; 2021 Copyright: NestRest</p>
              </div>
        </div>
    }
}