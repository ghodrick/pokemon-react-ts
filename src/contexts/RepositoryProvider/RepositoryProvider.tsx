import React from 'react'
import { Repositories } from '../../models/Repository.types';

interface PropsRepositoryProvider {
    children: JSX.Element | JSX.Element[],
    repositories: Repositories
}

interface RepositoryContextType {
    repositories: Repositories;
  }

const RepositoryContext = React.createContext<RepositoryContextType | null>(null);

const RepositoryProvider: React.FC<PropsRepositoryProvider> = ({children, repositories}) => {

    return (  
        <RepositoryContext.Provider value={{repositories}}>
            {children}
        </RepositoryContext.Provider>
    );
}


export const useRepository = () => {

    const context = React.useContext(RepositoryContext);

    if (!context) 
    {
        throw new Error('useRepositories debe ser usado dentro de un RepositoryProvider');
    }

    return context.repositories;
};
 
export default RepositoryProvider;