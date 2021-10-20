interface SignInProps {
    type?: 'text' | 'number';
    text: string;
    valueIn: any;
    readOnly?: boolean;
    valueAlter?: (valor: any) => void
};

export default function SignIn (props: SignInProps) {
    return (
        <div className="flex flex-col"> 
            <label className="mb-4">
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'} 
                value={props.valueIn}
                readOnly={props.readOnly}
                onChange={e => props.valueAlter?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}
