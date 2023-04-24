import { useEffect, useState } from "react";
import { SearchFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { useIssueContext } from "../../../../contexts/IssueContext";

export function SearchForm() {
  const { register, watch } = useForm();
  const { loadIssues } = useIssueContext();
  const stringToSearch = watch('search');

  useEffect(() => { 
    let isCancelled = false; 
    const changeHandler = async () => { 
      setTimeout(async () => {
        if (!isCancelled) { 
          loadIssues(stringToSearch);
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