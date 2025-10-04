const translations = [
    {
        en: "I know it's long, I know it's English but I also know it's amazing! I really suggest you to watch this tutorial. What I mean by 'watch' is not something like watching a movie or video. I meant learn everything in that tutorial and practice everything by participating the video.",
        tr: "Biliyorum uzun, biliyorum İngilizce ama aynı zamanda mükemmel olduğunu da biliyorum! Bu eğitimi izlemenizi gerçekten tavsiye ederim. 'İzlemek' derken bir film veya video gibi izlemekten bahsetmiyorum. O eğitimden her şeyi öğrenmek ve videoya katılarak her şeyi pratik yapmak anlamına geliyor."
    },
    {
        en: "Note: Completing it could take time like a month or two months(For instance it took 1 month for me). It doesn't matter how long it takes. What matters is that you 'really' learn step by step.",
        tr: "Not: Tamamlamak bir ay veya iki ay sürebilir (örneğin benim için 1 ay sürdü). Ne kadar sürdüğü önemli değil. Önemli olan, adım adım gerçekten öğrenmeniz."
    },
    {
        en: "If you completed the python tutorial by BroCode you are ready to dive into computer science. It's really gonna help you to understand how a computer works and what you do as a programmer. Also this computer science classes (CS50) is gonna be harder but I know that you are determined.",
        tr: "BroCode'un Python eğitimini tamamladıysanız, bilgisayar bilimine dalmaya hazırsınız. Bu, bir bilgisayarın nasıl çalıştığını ve bir programcı olarak ne yaptığınızı anlamanıza gerçekten yardımcı olacak. Ayrıca bu bilgisayar bilimi dersleri (CS50) daha zor olacak ama kararlı olduğunuzu biliyorum."
    }
];

// Handle all translate buttons
document.querySelectorAll('.translate-button').forEach(button => {
    button.addEventListener('click', () => {
        // Find all paragraphs in the same parent section
        const parent = button.parentElement;
        const paragraphs = parent.querySelectorAll('p');

        paragraphs.forEach(p => {
            translations.forEach(t => {
                if (p.textContent === t.en) {
                    p.textContent = t.tr;
                } else if (p.textContent === t.tr) {
                    p.textContent = t.en;
                }
            });
        });
    });
});
