import React from 'react'

const Heading = () => {
    return (
        <section className="h-100 bg-primary p-4 flex-column justify-between text-white">
            <nav className="flex-row justify-between">
                <h3>
                E-Stylist
                </h3>
                <h4>
                    <a href="mailto:estylist@support.com">
                        support@estylist.com
                    </a>
                </h4>
            </nav>
            <div>
                <h1>E-Stylist</h1>
                <h2>Give your customers beautiful stylist-curated outfits from home!</h2>
            </div>
            <h4>
                Sign up for early access ➞
            </h4>

        </section>
    )
}

export default Heading
