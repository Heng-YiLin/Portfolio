export default function Contact() {
    return (
        <section id="contact">
            <div className="max-w-4xl mx-auto px-4 py-12 min-h-[50vh]">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-700 mb-4">
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                        <strong>LinkedIn:</strong>{' '}
                        <a href="https://www.linkedin.com/in/hengyi-lin/" className="underline" target="_blank">
                            linkedin.com/in/hengyi-lin/
                        </a>
                    </li>
                    <li>
                        <strong>GitHub:</strong>{' '}
                        <a href="https://github.com/Heng-YiLin" className="underline" target="_blank">
                            github.com/Heng-YiLin
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}