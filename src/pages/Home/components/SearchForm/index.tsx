import { useEffect, useState } from "react";
import { SearchFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { api } from "../../../../lib/axios";

export function SearchForm() {
  const { register, handleSubmit, watch } = useForm();
  const stringToSearch = watch('search');

  function onSubmit(data: any) {
    console.log(data);
  }

  useEffect(() => { 
    let isCancelled = false; 
    const changeHandler = async () => { 
      setTimeout(async () => {
        if (!isCancelled) { 
          const responseIssues = await api.get(`search/issues?q=%20repo:lucasivisson/Github-Blog`);
        } 
      }, 1000); 
    }; 
    
    changeHandler(); 
    //The cleanup function is called when useEffect is called again or on unmount. 
    return () => { 
      isCancelled = true; 
    }; 
   }, [stringToSearch]); 

  return (
    <SearchFormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <form action="">
        <input type="text" placeholder='Buscar conteúdo' {...register("search")}/>
      </form>
    </SearchFormContainer>
  );
}