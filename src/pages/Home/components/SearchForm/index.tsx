import { useEffect, useState } from "react";
import { SearchFormContainer } from "./styles";
import { useForm } from 'react-hook-form';

export function SearchForm() {
  const { register, handleSubmit, watch } = useForm();
  const [stringToSearch, setStringToSearch] = useState<string>('');
  const searchString = watch('search');

  function onSubmit(data: any) {
    console.log(data);
  }

  function handleNewStringToSearchChange() {
    console.log(searchString);
    setStringToSearch(searchString);
    console.log(stringToSearch);
  }

  // useEffect(() => { 
  //   let isCancelled = false; 
  //   const changeHandler = async () => { 
  //   await timeout(1000); 
  //   if (!isCancelled) { 
  //   alert(`A name was changed: ${stringToSearch}`); 
  //   } 
  //   }; 
    
  //   changeHandler(); 
  //   //The cleanup function is called when useEffect is called again or on unmount. 
  //   return () => { 
  //   isCancelled = true; 
  //   }; 
  //  }, [stringToSearch]); 

  return (
    <SearchFormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Buscar conteúdo' {...register("search")} onChange={handleNewStringToSearchChange}/>
      </form>
    </SearchFormContainer>
  );
}