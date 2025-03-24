import React from 'react'

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "aff95ec9-9e41-4f45-8250-488b3907f9a4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div>
            <h2 className="text-4xl font-unbound text-center mb-8 mt-12">Contact</h2>

            <form onSubmit={onSubmit}
                className='w-full h-full gap-4 flex flex-col justify-center items-center text-white border border-zinc-500 hover:border-blue-500 p-6 rounded-xl'
            >
                <div className='grid grid-cols-2 gap-2 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Name</label>
                        <input
                            className='w-full h-full text-white border-b border-zinc-500 hover:border-blue-500'
                            type="text" name="name" required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Email</label>
                        <input
                            className='w-full h-full text-white border-b border-zinc-500 hover:border-blue-500'
                            type="email" name="email" required
                        />
                    </div>
                </div>
                <label htmlFor="message"
                    className='text-left w-full'
                >Message</label>
                <textarea
                    className='w-full h-full text-white border border-zinc-500 rounded-xl p-2 hover:border-blue-500'
                    rows={8}
                    name="message" required>
                </textarea>

                <button type="submit"
                    className='w-full h-full text-white bg-gradient-to-tr from-black to-blue-500 p-2 rounded-xl border-b border-l border-zinc-500'
                > {result ? result : "Send Message"}</button>

            </form>
        </div>
    )
}

export default Contact