import os
import filecmp
import shutil

from typing import List, Tuple

def update_pdf(file_list: List[Tuple[str, str]]) -> None:
    """
    Update the PDF files in the website if the new version is different from the old one.

    Args:
        file_list (List[Tuple[str, str]]): A list of tuples, where each tuple contains the old file path and the new file path. The old file path is the path to the file in the website and the new file path is the path to the file in the local directory.
    """

    base_dir = os.path.dirname(os.path.abspath(__file__))
    for f, new_f in file_list:
        f = os.path.abspath(os.path.join(base_dir, f))
        new_f = os.path.abspath(os.path.join(base_dir, new_f))
        try:
            print(f"📡 Updating {f} from {new_f}")
            if not os.path.exists(f) or not filecmp.cmp(f, new_f):
                shutil.copy(new_f, f)
                print(f"✅ Updated {f}")
        except Exception as e:
            print(f"❌Error happened when updating {f}: {e}")


def main():
    update_list = [
        (r"public\assets\pdfs\courses\Amath753_Advanced_PDEs.pdf", r"C:\Users\gyx00\OneDrive - University of Waterloo\study\Amath753 Adanved PDEs\Amath753_Advanced_PDEs.pdf"),
        (r"public\assets\pdfs\courses\Phys454_Quantum_theory_Notes.pdf", r"C:\Users\gyx00\OneDrive - University of Waterloo\study\Phys454 Quantum theory2\Phys454_Quantum_theory_Notes.pdf"),
        (r"public\assets\pdfs\courses\PMATH_451_Measure_Theory_Notes.pdf", r"C:\Users\gyx00\OneDrive - University of Waterloo\study\Pmath451 Measure Theory\PMATH_451_Measure_Theory_Notes.pdf"),
        (r"public\assets\pdfs\courses\Pmath465_Smooth_Manifold_Notes.pdf", r"C:\Users\gyx00\OneDrive - University of Waterloo\study\Pmath465 Smooth Manifold\Pmath465_Smooth_Manifold_Notes.pdf"),
        (r"public\assets\pdfs\courses\Pmath753_Functional_Analysis.pdf", r"C:\Users\gyx00\OneDrive - University of Waterloo\study\Pmath753 Functional Analysis\Pmath753_Functional_Analysis.pdf"),
    ]
    update_pdf(update_list)

if __name__ == "__main__":
    main()