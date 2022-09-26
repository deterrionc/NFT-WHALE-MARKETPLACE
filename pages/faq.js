import React, { useState } from 'react';

const data = [
  {
    title: 'Getting verified',
    items: [
      {
        id: 1,
        question: 'How do I get my NFT collection verified on Magic Eden?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm" className="text-indigo-800">Listing Application Form.</Link>'
      },
      {
        id: 2,
        question: 'How do I get my NFT collection verified on Magic Eden?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 3,
        question: 'How long does it take to get verified on Magic Eden?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      }
    ]
  },
  {
    title: 'Fees',
    items: [
      {
        id: 4,
        question: 'I want to list an NFT, do I have to pay listing fees?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 5,
        question: 'What are the fees on Magic Eden?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 6,
        question: 'When a sale happens, how long will it take to get SOL into my wallet?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 7,
        question: 'How much are royalties?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      }
    ]
  },
  {
    title: 'Bidding (Make offer):',
    items: [
      {
        id: 8,
        question: 'I made an offer, do I need to pay any fee?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 9,
        question: 'I made an offer, and the item is sold, how can I cancel my offer?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 10,
        question: 'What\'s the minimum offer price for an item?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      }
    ]
  },
  {
    title: 'Bidding (Make offer):',
    items: [
      {
        id: 11,
        question: 'I made an offer, do I need to pay any fee?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 12,
        question: 'I made an offer, and the item is sold, how can I cancel my offer?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 13,
        question: 'What\'s the minimum offer price for an item?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      }
    ]
  },
  {
    title: 'What is Magic Eden launchpad?',
    items: [
      {
        id: 14,
        question: 'I made an offer, do I need to pay any fee?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 15,
        question: 'I made an offer, and the item is sold, how can I cancel my offer?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      },
      {
        id: 16,
        question: 'What\'s the minimum offer price for an item?',
        answer: 'Please fill out our listing application form and someone from the team will be in contact: <Link href="/listingApplicationForm"><span className="text-indigo-800">Listing Application Form.</span></Link>'
      }
    ]
  }
];

export default function Faq() {
  const [openedQuestions, setOpenedQuestions] = useState([]);

  const handleToggleQuestions = (faqId) => {
    const cloneOpenedQuestions = [...openedQuestions];
    const indexOfTargetQuestion = cloneOpenedQuestions.indexOf(faqId);

    if (indexOfTargetQuestion > -1) {
      cloneOpenedQuestions.splice(indexOfTargetQuestion, 1);
    } else {
      cloneOpenedQuestions.push(faqId);
    }

    setOpenedQuestions(cloneOpenedQuestions);
  };

  return (
    <div className="relative bg-dark-gradient bg-no-repeat pb-20 lg:pb-28">
      <div className="sm:px-6 lg:px-28 gap-x-8 pt-28">
        <p className='text-gray-200 text-5xl font-medium'>F.A.Q</p>
        <div className='grid grid-cols-2 gap-12 mt-6'>
          {
            data.map((dataItem, index) => (
              <div key={index}>
                <div className='w-4/5'>
                  <p className='text-2xl text-gray-200 font-medium'>{dataItem.title}</p>
                  {
                    dataItem.items.map(faqItem => (
                      <div key={faqItem.id} className='mt-6'>
                        <p className='text-xl text-gray-300 mb-6' onClick={() => handleToggleQuestions(faqItem.id)}>
                          {faqItem.question}
                        </p>
                        {
                          openedQuestions.indexOf(faqItem.id) > -1 && (
                            <p className='text-gray-400 text-md' dangerouslySetInnerHTML={{ __html: faqItem.answer }}></p>
                          )
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}