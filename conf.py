# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Github Page'
copyright = '2025, jianou'
author = 'jianou'
release = '1.0.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'myst_parser',
    "sphinx_design",
    'sphinx_copybutton',
    'sphinx_wagtail_theme',
    'sphinx.ext.todo',
    'sphinx.ext.githubpages',
]

source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}

myst_enable_extensions = ["colon_fence"]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

language = 'zh_CN'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_wagtail_theme'
html_static_path = ['_static']
