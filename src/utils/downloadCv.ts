/**
 * Aksi tombol CV untuk Taufik Hidayat Malii.
 *
 * Status sementara (perintah Taufik, 7 Nov 2026): berkas CV sedang
 * diperbarui dan sudah ditarik dari website, jadi tombol CV tidak lagi
 * mengunduh berkas. Sebagai gantinya tampilkan notifikasi bahwa CV
 * sedang diperbarui. Tombolnya sendiri tetap tampil seperti biasa.
 *
 * Untuk mengembalikan unduhan seperti semula, pulihkan lagi isi fungsi
 * ini menjadi pemicu unduhan '/CV_Taufik_Hidayat_Malii.pdf'.
 */

const TOAST_ID = 'cv-update-toast';
let toastTimer: number | null = null;

const showCvUpdateToast = () => {
  if (typeof document === 'undefined') return;

  let toast = document.getElementById(TOAST_ID);
  if (!toast) {
    toast = document.createElement('div');
    toast.id = TOAST_ID;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.style.cssText = [
      'position:fixed',
      'left:50%',
      'bottom:28px',
      'transform:translate(-50%,16px)',
      'z-index:9999',
      'max-width:min(92vw,430px)',
      'background:#171717',
      'color:#FFFFFF',
      'border:1px solid rgba(245,158,11,0.55)',
      'border-radius:16px',
      'padding:14px 18px',
      'box-shadow:0 18px 40px rgba(0,0,0,0.35)',
      'text-align:left',
      'opacity:0',
      'transition:opacity 0.3s ease, transform 0.3s ease',
      'cursor:pointer',
      "font-family:inherit",
    ].join(';');
    toast.innerHTML =
      '<strong style="display:block;font-size:14px;letter-spacing:0.02em;color:#F59E0B;">CV Sedang Diperbarui</strong>' +
      '<span style="display:block;margin-top:4px;font-size:13px;line-height:1.55;color:#E5E5E5;">Untuk sementara, CV sedang diperbarui dan belum dapat diunduh. Silakan hubungi melalui halaman kontak atau email kontak@taufikmaliiportofolio.com.</span>';
    toast.addEventListener('click', () => {
      if (toast) toast.style.opacity = '0';
      if (toastTimer !== null) window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => toast?.remove(), 320);
    });
    document.body.appendChild(toast);
    // Picu transisi masuk pada frame berikutnya
    requestAnimationFrame(() => {
      if (toast) {
        toast.style.opacity = '1';
        toast.style.transform = 'translate(-50%,0)';
      }
    });
  }

  if (toastTimer !== null) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    const el = document.getElementById(TOAST_ID);
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translate(-50%,16px)';
      window.setTimeout(() => el.remove(), 320);
    }
  }, 5000);
};

export const downloadCv = () => {
  showCvUpdateToast();
};
