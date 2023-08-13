import FormSelect from "../../../../components/forms/select/FormSelect/FormSelect";


const PokemonFilter = () => {

    let arrayOfObjects = Array.from({length: 10}, () => ({
        id: Math.floor(Math.random() * 10000), // Generates a random number between 0 and 9999
        name: Math.random().toString(36).substring(7)
    }));

    return ( 
        <div>
            <div>
                <FormSelect 
                    name="selector"
                    options={arrayOfObjects}
                    idKey="id"
                    textKey="name"
                />
            </div>
        </div>
     );
}
 
export default PokemonFilter;