<script>
document.addEventListener('DOMContentLoaded', function() {
    // Warte, bis MemberStack die ID geladen hat
    setTimeout(() => {
        // 1. Hole die MemberStack-ID
        const memberStackIdElement = document.querySelector('[data-ms-member]');
        const memberStackId = memberStackIdElement ? memberStackIdElement.getAttribute('data-ms-member') : null;

        if (!memberStackId) {
            console.warn('MemberStack-ID nicht gefunden.');
            return;
        }

        // 2. Hole alle CMS-Items mit der Klasse "cms-item"
        const cmsItems = document.querySelectorAll('.cms-item');

        cmsItems.forEach(item => {
            // 3. Hole die versteckte CMS-ID innerhalb des Items
            const cmsIdElement = item.querySelector('.cms-id');
            const cmsId = cmsIdElement ? cmsIdElement.textContent.trim() : null;

            // 4. Überprüfe, ob die IDs übereinstimmen
            if (cmsId && cmsId === memberStackId) {
                // IDs stimmen überein: Zeige das Item an
                item.style.display = 'block';
            } else {
                // IDs stimmen nicht überein: Blende das Item aus
                item.style.display = 'none';
            }
        });
    }, 500);  // 500 ms Verzögerung, um sicherzustellen, dass die MemberStack-ID geladen ist
});
</script>
