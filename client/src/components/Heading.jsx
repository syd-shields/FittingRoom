import React, { useCallback } from 'react'

const Heading = ({ isModalOpen, onModalChange }) => {

    const handleModalChange = useCallback(e => {
        onModalChange(true)
    }, [onModalChange]);

    return (
        <section className="h-100 bg-primary p-5 flex-column justify-between text-white">
            <nav className="flex-row justify-between">
                <h3>
                    E-STYLIST
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
                <button className="btn-link text-white" onClick={handleModalChange}>
                    Sign up for early access ➞
                </button>
            </h4>

        </section>
    )
}

export default Heading