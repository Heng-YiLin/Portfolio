export default function Contact() {
    return (
        <section id="contact">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-700 mb-4">
                    I’m currently looking for graduate and junior software roles. Feel free to reach out.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Email:</strong> your.email@example.com</li>
                    <li>
                        <strong>LinkedIn:</strong>{' '}
                        <a href="https://www.linkedin.com/in/your-linkedin" className="underline" target="_blank">
                            linkedin.com/in/your-linkedin
                        </a>
                    </li>
                    <li>
                        <strong>GitHub:</strong>{' '}
                        <a href="https://github.com/your-github" className="underline" target="_blank">
                            github.com/your-github
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}