function Button({children, variant}) {

    const variants = {
        "outline-yellow": 'border-yellow-300 rounded-full text-yellow-300 mt-10',
        "fill-yellow": 'bg-yellow-300 rounded-full mt-2'
    }

    const pickedVariant = variants[variant]

    return (
        <a className={`border px-10 py-2 font-semibold text-lg inline-block ${pickedVariant}`}>
            {children}
        </a>
    )
}
export default Button;