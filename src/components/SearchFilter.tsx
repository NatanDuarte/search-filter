interface SearchFilterProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder: string;
}

export function SearchFilter({
    handleChange, 
    name, 
    placeholder 
}: SearchFilterProps) {
    return (
        <>
            <input
                type="text" onChange={handleChange || null} name={name || ''} 
                placeholder={placeholder || ''} className='p-2 m-4 bg-transparent 
                border border-gray-700 rounded-sm focus:outline-none 
                focus:border-rose-300 transition-colors' />
        </>
    );
}