import React from 'react'

const Stats = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-4xl font-bold title-font mb-4 text-purple-600">Why Choose Us?</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">At RentalBlox, we strive to make the process of finding and renting a property stress-free. Whether you're a first-time renter or an experienced investor, our team is here to assist you every step of the way. Start your search today and find your perfect rental property with us!</p>
                    </div>
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-purple-200 px-4 py-6 rounded-lg">

                                <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                <p class="leading-relaxed">Downloads</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-purple-200 px-4 py-6 rounded-lg">

                                <h2 class="title-font font-medium text-3xl text-gray-900">3.8K</h2>
                                <p class="leading-relaxed">Contract Signed</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-purple-200 px-4 py-6 rounded-lg">

                                <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
                                <p class="leading-relaxed">Awards</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-purple-200 px-4 py-6 rounded-lg">
                                <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                                <p class="leading-relaxed">Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Stats
